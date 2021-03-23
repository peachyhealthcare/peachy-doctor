import React, { useState, useRef } from 'react';

import {
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';
import SignaturePad from 'react-signature-canvas';
import ReactSelectExample from '../../containers/forms/ReactSelectExample';
import Select from 'react-select';
import CustomSelectInput from '../../components/common/CustomSelectInput';

const selectData = [
  { label: 'UK Pharmacy', value: '0', key: 0 },
  { label: 'Soul Pharmacy', value: '1', key: 1 },
];

const NotesSignature = ({ match }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <div>
        <Input className="mb-4" type="textarea" placeholder="Notes:" />
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select mb-4"
          classNamePrefix="react-select"
          name="form-field-name"
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Select pharmacy"
          options={selectData}
        />
      </div>
      {Signature()}
    </>
  );
};
export default NotesSignature;

function Signature() {
  const [modalBasic, setModalBasic] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

  return (
    <div className="signatureModal">
      {/* <button className="positive" outline onClick={() => setModalBasic(true)}>
        Signature
      </button> */}
      <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          className: 'signature',
        }}
      />
      <button className="negative mb-2" onClick={clear}>
        Clear
      </button>
      <button className="positive" onClick={save}>
        Save
      </button>

      <Modal
        size="lg"
        isOpen={modalBasic}
        toggle={() => setModalBasic(!modalBasic)}
      >
        <ModalHeader>Write your signature below</ModalHeader>
        <ModalBody>
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: 'signature',
            }}
          />
        </ModalBody>
        <ModalFooter>
          <button className="negative" onClick={clear}>
            Clear
          </button>
          <button className="positive" onClick={save}>
            Save
          </button>
          <button className="negative" onClick={() => setModalBasic(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
