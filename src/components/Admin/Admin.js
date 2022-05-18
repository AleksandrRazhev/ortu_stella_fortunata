import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Admin() {
  return (
    <>
      <h2>Страница администратора</h2>
      <Autorization />
      <Authorized />
    </>
  )
}

const Autorization = () => {
  return (
    <>
      <h2>Компонент авторизации</h2>
      <Formik>
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Отправить</button>
        </Form>
      </Formik>
    </>
  )
}

const Authorized = () => {
  return (
    <h2>Администратор авторизован</h2>
  )
}
