import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('Debe ser un correo válido').required('El correo es obligatorio'),
});
