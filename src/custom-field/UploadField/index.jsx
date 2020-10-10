import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { getBase64 } from 'utils/common';
UploadField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  disabled: PropTypes.bool,
};

UploadField.defaultProps = {
  type: 'file',
  label: '',
  disabled: false,
};

function UploadField(props) {
  const { field, form, type } = props;
  const { name } = field;
  const { setFieldValue } = form;

  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const beforeUpload = file => {
    setFileList([...fileList, file]);
    return false;
  };

  const handlePreview = async file => {
    if (!file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name);
  };
  const handleChange = ({ fileList }) => {
    setFileList(fileList);
    setFieldValue('file', fileList);
  };

  const handleCancel = () => setPreviewVisible(false);
  return (
    <div>
      <Upload
        id={name}
        type={type}
        listType="picture"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}>
        <Button icon={<UploadOutlined />} style={{ marginBottom: 10 }}>
          Chọn hình ảnh
        </Button>
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
}

export default UploadField;
