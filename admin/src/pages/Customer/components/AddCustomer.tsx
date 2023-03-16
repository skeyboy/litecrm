import {ModalForm, ProFormInstance, ProFormText} from "@ant-design/pro-components"
import {useRef} from "react";
import {ModalProps} from "antd";
import {CommonFormProps} from "@ant-design/pro-form/es/BaseForm/BaseForm";

type Props = {
  open: boolean,
  onCancel: () => void
  maskClosable?: boolean | undefined
  destroyOnClose?: boolean | undefined
}

export default function AddCustomer({open, onCancel, maskClosable, destroyOnClose}: Props) {
  const formRef = useRef<ProFormInstance>()
  return (<ModalForm
    open={open}
    modalProps={{
      onCancel: onCancel,
      maskClosable: maskClosable,
      destroyOnClose: destroyOnClose,
    }}
    title={'新增'}
    formRef={formRef}>
    <ProFormText name={'username'} label={'用户名'}/>

  </ModalForm>);
}

export type OnEditCustomer = Partial<API.Customer> & { open: boolean } & Partial<Omit<ModalProps, 'visible'>>

type OnEditProps = OnEditCustomer & { onFinish?: CommonFormProps.onFinish }

export function EditCustomer({open, ...model}: OnEditProps) {
  const formRef = useRef<ProFormInstance>()
  return (<ModalForm
    initialValues={{...model}}
    open={open}
    onFinish={(formData) => model.onFinish(formData)}
    modalProps={{
      destroyOnClose: true,
      maskClosable: true,
      ...model
    }}
    title={model.title}
    formRef={formRef}
  >
    <ProFormText name={'username'} key={model.username} label={'用户名'}/>
    <ProFormText name={'email'} key={model.email} label={'邮箱'}/>
    <ProFormText name={'mobile'} key={model.mobile} label={'手机号'}/>
    <ProFormText name={'wechat'} key={model.wechat} label={'微信'}/>
    <ProFormText name={'QQ'} key={model.qq} label={'QQ'}/>

  </ModalForm>);
}
