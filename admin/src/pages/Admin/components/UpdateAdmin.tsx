import {ModalForm, ProFormText} from "@ant-design/pro-components";

export type UpdateProps = API.Admin & { open: boolean } & { onCancel?: () => void }
export default function UpdateAdmin({open, onCancel, ...admin}: UpdateProps) {

  return <ModalForm
    modalProps={{
      onCancel,
      destroyOnClose: true,
      maskClosable: false
    }}
    onFinish={async (v) => {
      if (onCancel) {
        onCancel();
      }
    }}
    title={'编辑'}
    open={open}
    initialValues={{
      ...admin
    }}>
    <ProFormText
      name={'username'}
      label="用户名"
      rules={[
        {
          required: true
        },
        {min: 2, max: 32, type: 'string'}
      ]}
    />
    <ProFormText
      name={'email'}
      label="邮箱"
      rules={[
        {
          required: true,
          type: 'email'
        },
      ]}
    />
  </ModalForm>
}
