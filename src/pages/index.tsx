import { useEffect, useCallback, useState } from "react";

import moment from "moment";

import { Layout, Table, Header } from "components";
import DragonServices from "services/DragonService/DragonServices";

import * as S from "./sytles";

const Home = () => {
  const [dragons, setDragons] = useState([]);

  const getDragonList = useCallback(async () => {
    const { data } = await DragonServices.findAll();
    setDragons(data);
  }, []);

  useEffect(() => {
    getDragonList();
  }, [getDragonList]);

  return (
    <Layout>
      <S.Container>
        <Header title="LISTAGEM" />
        <Table head={[{ name: "Dragão" }, { name: "Tipo" }, { name: "Criado em" }]}>
          {dragons.map((dragon: any) => (
            <tr
              key={dragon?.id}
              className="is-detailsLink"
              onClick={() => {window.location.href = "detail"}}
            >
              <td>{dragon?.name}</td>
              <td>{dragon?.type}</td>
              <td className="projectListLastTd">{moment(dragon?.createdAt).format("DD/MM/YYYY")}</td>
            </tr>
          ))}
        </Table>
      </S.Container>
    </Layout>
  )
};

export default Home;