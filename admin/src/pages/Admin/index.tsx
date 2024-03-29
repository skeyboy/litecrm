import {adminList, deleteAdmin} from '@/services/litecrm/admin';
import {PlusOutlined} from '@ant-design/icons';
import {ActionType, PageContainer, ProColumns, ProTable} from '@ant-design/pro-components';
import {Button, message} from 'antd';
import dayjs from 'dayjs';
import {useRef, useState} from 'react';
import AddAdmin from './components/AddAdmin';
import UpdateAdmin, {UpdateProps} from "@/pages/Admin/components/UpdateAdmin";

function Index() {
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState<UpdateProps>({open: false} as UpdateProps)
  const columns: ProColumns<API.Admin>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
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
      // initialValue: [
      //   dayjs(new Date()).format('YYYY-MM-DD'),
      //   dayjs(new Date()).format('YYYY-MM-DD'),
      // ],
      search: {
        transform: (value: any) => {
          return {startDate: value[0], endDate: value[1] + ' 23:59:59'};
        },
      },
      // 自定义渲染
      render(_, record: API.Admin) {
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:MM')
      }
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (_, record) => [
        <Button type={'primary'} key={'edit'} onClick={() => {
          setUpdate({open: true, ...record})
        }}>编辑</Button>,
        <Button type={'primary'} danger key={'delete'} onClick={async () => {
          const res = await deleteAdmin({id: record.id})
          if (!res.errorMessage) {
            await actionRef.current?.reload()
            message.success('删除成功')
          } else {
            message.error(res.errorMessage)
          }
        }}>
          删除
        </Button>,
      ]
    },
  ];
  return (
    <PageContainer>
      <UpdateAdmin {...update} onCancel={() => {
        setUpdate({...update, open: false})
      }}/>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        request={adminList}
        rowKey="id"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined/>} type="primary" onClick={() => setOpen(true)}>
            新增
          </Button>,
        ]}
      />
      <AddAdmin open={open} onCancel={() => setOpen(false)}/>
    </PageContainer>
  );
}

export default Index;
