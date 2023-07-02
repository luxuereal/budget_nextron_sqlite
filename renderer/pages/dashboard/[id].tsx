import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import Layout from '../../components/layout';

function Dashboard() {

  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id === '1') {
      toast.success('Welcome to the application.');
    }
  }, [router.query])

  return (
    <Layout>
      Dashboard Page
    </Layout>
  );
}

export default Dashboard;
