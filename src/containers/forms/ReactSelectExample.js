/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import { Colxx } from '../../components/common/CustomBootstrap';

const selectData = [
  { label: '00:00', value: '0', key: 0 },
  { label: '01:00', value: '1', key: 1 },
  { label: '02:00', value: '2', key: 2 },
  { label: '03:00', value: '3', key: 3 },
  { label: '04:00', value: '4', key: 4 },
  { label: '05:00', value: '5', key: 5 },
  { label: '06:00', value: '6', key: 6 },
  { label: '07:00', value: '7', key: 7 },
  { label: '08:00', value: '8', key: 8 },
  { label: '09:00', value: '9', key: 9 },
  { label: '10:00', value: '10', key: 10 },
  { label: '11:00', value: '11', key: 11 },
  { label: '12:00', value: '12', key: 12 },
  { label: '13:00', value: '13', key: 13 },
  { label: '14:00', value: '14', key: 14 },
  { label: '15:00', value: '15', key: 15 },
  { label: '16:00', value: '16', key: 16 },
  { label: '17:00', value: '17', key: 17 },
  { label: '18:00', value: '18', key: 18 },
  { label: '19:00', value: '19', key: 19 },
  { label: '20:00', value: '20', key: 20 },
  { label: '21:00', value: '21', key: 21 },
  { label: '22:00', value: '22', key: 22 },
  { label: '23:00', value: '23', key: 23 },
];

const ReactSelectExample = () => {
  const [selectedOption, setSelectedOption] = useState('');
  // const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Row>
      <Colxx xxs="12" md="12" className="mb-5">
        {/* <label>
          <IntlMessages id="form-components.state-single" />
        </label> */}
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          value={selectedOption}
          onChange={setSelectedOption}
          options={selectData}
        />
      </Colxx>
      {/* <Colxx xxs="12" md="6">
        <label>
          <IntlMessages id="form-components.state-multiple" />
        </label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          isMulti
          name="form-field-name"
          value={selectedOptions}
          onChange={setSelectedOptions}
          options={selectData}
        />
      </Colxx> */}
    </Row>
  );
};
export default ReactSelectExample;
