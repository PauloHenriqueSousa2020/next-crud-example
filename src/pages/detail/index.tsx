import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { Header, Layout, Loading } from "components";

import DragonServices from "services/DragonService/DragonServices";

const Detail = () => {
  const [dragonDetail, setDragonDetail] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.id;

  const getDragonDetail = useCallback(async () => {
    if (id !== undefined) {
      const { data } = await DragonServices.findOne(id).finally(() => { setLoading(false) });
      setDragonDetail(data);
    }
  }, [id]);

  useEffect(() => {
    getDragonDetail();
  }, [getDragonDetail]);

  return (
    <Layout>
      <Loading loading={loading}>
        <Header title={`DETALHE DRAGÃO`} />

        <div>
          {!!dragonDetail?.name && (
            <p>Name: {dragonDetail?.name}</p>
          )}
          {!!dragonDetail?.type && (
            <p>Tipo: {dragonDetail?.type}</p>
          )}
          {!!dragonDetail?.createdAt && (
            <p>Criado em: {moment(dragonDetail?.createdAt).format("DD/MM/YYYY")}</p>
          )}
          {(!!dragonDetail?.histories || dragonDetail?.histories?.length > 0) && (
            <p>História: {dragonDetail?.histories}</p>
          )}
        </div>
      </Loading>
    </Layout>
  )
};

export default Detail;