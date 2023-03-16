import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import dayjs from "dayjs";
import {customerList, deleteCustomer} from "@/services/litecrm/customer";
import {Button, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useRef, useState} from "react";
import AddCustomer, {EditCustomer, OnEditCustomer} from "@/pages/Customer/components/AddCustomer";

function Index() {
  const [open, setOpen] = useState(false);
  const [onEdit, setOnEdit] = useState<OnEditCustomer>({open: false});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.Customer>[] = [
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
      //日期选择器给默认值
      initialValue: [
        dayjs(new Date()).format('YYYY-MM-DD'),
        dayjs(new Date()).format('YYYY-MM-DD'),
      ],
      search: {
        transform: (value: any) => {
          return {startDate: value.first, endDate: value.last + ' 23:59:59'}
        }
      }
    },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (_, record) => [
        <Button type={'primary'} key={'edit'} onClick={() => {
          setOnEdit({open: true, ...record})
        }
        }>编辑</Button>,
        <Button type={'primary'} key={'delete'} onClick={async () => {
          const rev = await deleteCustomer({id: record.id})
          if (!rev.errorMessage) {
            await actionRef.current?.reload()
            message.success('删除成功')
          } else {
            message.error(rev.errorMessage)
          }
        }
        }>删除</Button>
      ]
    }
  ];
  return (<PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined/>} type="primary" onClick={() => setOpen(true)}>
            新增
          </Button>
        ]}
        request={customerList}
        key={'id'}/>

      <AddCustomer open={open} onCancel={() => setOpen(false)}/>
      <EditCustomer onFinish={(onformdata) => {
        //TODO 增加用户编辑后数据提交操作
        
      }
      } title={'编辑用户'} {...onEdit} onCancel={() => {
        setOnEdit({open: false})
      }}/>

    </PageContainer>
  );
}

export default Index;
