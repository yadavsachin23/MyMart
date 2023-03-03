import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";
import Helmet from "../components/Helmet/Helmet";
import "../styles/login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          const storageRef = ref(storage, `images/${Date.now() + username}`);
          const uploadTask = uploadBytesResumable(storageRef, profile);

          uploadTask.on(
            (error) => {
              console.log(error.message);
              toast.error(error.message);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(
                async (downloadURL) => {
                  await updateProfile(user, {
                    displayName: username,
                    photoURL: downloadURL,
                  });
                  await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    displayName: username,
                    email,
                    photoURL: downloadURL,
                  });
                }
              );
            }
          );
        }
      );
      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <Form className="signup_form mt-2" onSubmit={signup}>
                  <h4 className="fw-bold fs-4 justify-content-center">
                    Signup
                  </h4>
                  <FormGroup className="form_group">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="file"
                      onChange={(e) => setProfile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button type="submit" className="auth_btn">
                    Signup
                  </button>
                  <p>
                    Already Have an Account? <Link to={"/login"}> Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
