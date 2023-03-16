import { adminList } from '@/services/litecrm/admin';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import AddAdmin from './components/AddAdmin';
function index() {
  const [open, setOpen] = useState(false);
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
      // 自定义渲染
      render(_,record: API.Admin){
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:MM')
      }
    },
  ];
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        request={adminList}
        rowKey="id"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => setOpen(true)}>
            新增
          </Button>,
        ]}
      />
      <AddAdmin open={open} onCancel={() => setOpen(false)} />
    </PageContainer>
  );
}

export default index;
