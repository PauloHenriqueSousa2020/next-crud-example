import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import DragonServices from "services/DragonService/DragonServices";
import { Layout } from "components";

const CreateEdit = () => {
  const [dragonDetail, setDragonDetail] = useState<any>({});
  const [isEditMode, setIsEditMode] = useState(false);

  const router = useRouter();
  const id = router.query.id;


  useEffect(() => {
    async function handleGetDragonById() {
      const { data } = await DragonServices.findOne(id)
      setDragonDetail(data);
      setIsEditMode(true)

      formik.setValues({
        name: data?.name,
        type: data?.type
      })
    }

    if (id !== undefined) {
      void handleGetDragonById()
    }
  }, [id]);


  const formik = useFormik({
    initialValues: {
      name: "",
      type: ""
    },
    enableReinitialize: true,
    //validationSchema: createChallengeSchema,
    onSubmit: (values) => {
      isEditMode ? handleUpdateDragon(values) : handleCreateDragon(values)
    },
  });

  const handleCreateDragon = (values: any) => {
    try{
      DragonServices.create(values).finally(() => {window.location.href = `/`});
    }catch(error){
      alert("Erro na hora de criar");
    }
  }

  const handleUpdateDragon = (values: any) => {
    try{
      DragonServices.update(values, id).finally(() => {window.location.href = `/`});
    }catch(error){
      alert("Erro na hora de editar");
    }
  }

  return (
    <Layout>
      <div>{isEditMode ? `Editar ${dragonDetail?.name}` : "Criar novo"}</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Digite o nome do dragão"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <input
          name="type"
          placeholder="Especifique o tipo de dragão"
          value={formik.values.type}
          onChange={formik.handleChange}
        />

        <button type="submit">Salvar</button>
      </form>

    </Layout>
  )
};

export default CreateEdit;
