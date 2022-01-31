import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";

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
        <Header title={`DETALHE DRAGÃO ${dragonDetail?.name}`} />
      </Loading>
    </Layout>
  )
};

export default Detail;