import React from "react";
import { useState, useEffect } from "react";

const inicialForm = {
  name: "",
  image: "",
  id: 0,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setform] = useState(inicialForm);

  useEffect(() => {
    if (dataToEdit) {
      setform(dataToEdit);
    } else {
      setform(inicialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.image) {
      alert("datos incompletos");
      return;
    }

    console.log(form.id);

    if (form.id === 0) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setform(inicialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "editar" : "agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={form.image}
          onChange={handleChange}
        />
        <input type="submit" value="enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
