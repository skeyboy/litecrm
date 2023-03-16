import {ModalForm, ProFormInstance, ProFormText} from '@ant-design/pro-components';
import {useRef} from 'react';
import {addAdmin} from "@/services/litecrm/admin";
import {message} from "antd";

interface Props {
  open: boolean;

  onCancel(): void;
}

function AddAdmin({open, onCancel}: Props) {
  const formRef = useRef<ProFormInstance>();
  return (
    <ModalForm
      title="新增"
      formRef={formRef}
      open={open}
      modalProps={{
        onCancel: () => onCancel(),
        maskClosable: false,
        destroyOnClose: true,
      }}
      onFinish={async (v: API.CreateAdminDto) => {
        console.log(v)
        const {errorMessage} = await addAdmin(v)
        if (errorMessage) {
          message.error(errorMessage)
        } else {
          message.success('')
        }
      }}
    >
      <ProFormText name={'username'} label="用户名"/>
      <ProFormText name={'email'} label="邮箱"/>
      <ProFormText name={'mobile'} label="手机号"/>
      <ProFormText name={'wechat'} label="微信"/>
      <ProFormText name={'qq'} label="QQ"/>
      <ProFormText name={'password'} label="密码"/>
    </ModalForm>
  );
}

export default AddAdmin;
