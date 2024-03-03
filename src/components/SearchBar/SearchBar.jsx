import toast, { Toaster } from 'react-hot-toast';
import { Field, Form, Formik } from 'formik';

export const SearchBar = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === '') {
          toast.error('Please fill out this field!', {
            duration: 2000,
            position: 'top-right',
          });
          return;
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </Form>
    </Formik>
  );
};

// export const SearchBar = ({ onSearch }) => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const searchQuery = e.target.elements.searchQuery.value;

// if (!searchQuery.trim()) {
//   toast('Type something to search', {
//     duration: 2000,
//     position: 'top-right',
//   });
//   return;
// }

//     onSearch(searchQuery);
//   };

//   return (
//     <header>
//       <form onSearch={handleSubmit}>
//         <input
//   type="text"
//   autoComplete="off"
//   autoFocus
//   placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <Toaster />
//     </header>
//   );
// };
