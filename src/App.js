import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './components/Loader';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import Modal from './components/Modal';

import * as authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


import ReductForm from './components/RedactForm/RedactForm'



const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChungName: "HomePage"*/),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contact-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const showModal = useSelector(state => state.modal.modal);

  console.log(showModal)


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const GetUserById = (id) => {
    const contacts = useSelector(state => state.contacts.items);

    return contacts.items.find(contact =>
      contact.id === id)
  };


  return (

    <>
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>

      {showModal && (
        <Modal >
          {/* <img src={largeImage} alt={inputValue} className="LargeImg" /> */}
          <ReductForm id={() => GetUserById('61a0e4005deb2600150f56ce')} />
        </Modal>
      )}

      <ToastContainer autoClose={2500} />
    </>

  )
}
