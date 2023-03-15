import { adminList } from '@/services/litecrm/admin';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import dayjs from 'dayjs';
function index() {
  const columns: ProColumns<API.Admin>[] = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },

    {
      title: 'QQ',
      dataIndex: 'qq',
    },
    {
      title: '微信',
      dataIndex: 'wechat',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      //日期选择器给默认值
      initialValue: [
        dayjs(new Date()).format('YYYY-MM-DD'),
        dayjs(new Date()).format('YYYY-MM-DD'),
      ],
      search: {
        transform: (value: any) => {
          return { startDate: value[0], endDate: value[1] + ' 23:59:59' };
        },
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable columns={columns} request={adminList} />
    </PageContainer>
  );
}

export default index;
