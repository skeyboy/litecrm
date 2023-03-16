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
      <ProFormText
        name={'username'}
        label="用户名"
        rules={[
          {
            required: true
          },
          {min: 2, max: 12, type: 'string'}
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

      <ProFormText
        name={'mobile'}
        label="手机号"
        rules={[
          {
            required: true,
            async validator(_, v) {
              let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
              if (!reg.test(v)) {
                return Promise.reject('手机号码格式错误');
              } else {
                return Promise.resolve();
              }
            }
          },
        ]}
      />
      <ProFormText name={'wechat'} label="微信"/>
      <ProFormText name={'qq'} label="QQ"/>
      <ProFormText
        name={'password'}
        label="密码"
        rules={[
          {min: 2, max: 12, required: true, type: 'string'}
        ]}
      />
    </ModalForm>
  );
}

export default AddAdmin;
