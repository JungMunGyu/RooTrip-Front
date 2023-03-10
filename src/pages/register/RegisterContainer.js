import { useCallback } from 'react';
import Register from './Register';
import CertificationEmail from './CertificationEmail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { register } from '../../services/user';
import { regExpSpace } from '../../constants/regExp';
import useInputValidator, { validate } from '../../hooks/useInputValidator';
import { useInitialState } from '../../hooks/useInitialState';

const RegisterContainer = () => {
  const { messages, validateInput } = useInputValidator();
  const [form, setForm, resetForm] = useInitialState({
    name: '',
    gender: 'M',
    email: '',
    nickname: '',
    password: '',
    cpassword: '',
  });
  const navigate = useNavigate();

  const onInput = useCallback(
    (e) => {
      if (!regExpSpace.test(e.target.value)) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }
    },
    [form, setForm],
  );

  const onCheck = useCallback(
    async (type, data) => await validateInput(type, data),
    [validateInput],
  );

  const onRegister = useCallback(
    async (e) => {
      e.preventDefault();

      navigate('./certification');
      try {
        if (validate(form)) {
          delete form.cpassword;
          await register(form);

          resetForm();
          navigate('./certification');
        }
      } catch (e) {
        await validateInput('axiosError', e.message);
      }
    },
    [navigate, form, validateInput, resetForm],
  );

  return (
    <>
      <Register
        form={form}
        messages={messages}
        onInput={onInput}
        onCheck={onCheck}
        onRegister={onRegister}
      />
      <Routes>
        <Route
          Path='/register/certification'
          element={<CertificationEmail />}
        />
      </Routes>
    </>
  );
};

export default RegisterContainer;
