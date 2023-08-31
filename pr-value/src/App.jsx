import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import Coba from './components/Coba';
import Form from './components/form';
import Formik from './components/Formik';
import Register from './components/Register';

function App() {
  const [mediaType, setMediaType] = useState('');
  const [articleSizeMmk, setArticleSizeMmk] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [adsRate, setAdsRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPhoto, setIsPhoto] = useState('no');
  const [prValue, setPrValue] = useState(0);

  useEffect(() => {
    calculatePrValue();
  }, [mediaType, articleSizeMmk, numColumns, adsRate, duration, isPhoto]);

  const calculatePrValue = () => {
    let calculatedPrValue = 0;

    if (mediaType === 'cetak_headline') {
      calculatedPrValue = articleSizeMmk * numColumns * adsRate * (isPhoto === 'yes' ? 10 : 8) + 0.1 * adsRate;
    } else if (mediaType === 'cetak_halaman') {
      calculatedPrValue = articleSizeMmk * numColumns * adsRate * (isPhoto === 'yes' ? 5 : 3) + 0.1 * adsRate;
    } else if (mediaType === 'tv_radio') {
      calculatedPrValue = duration * adsRate * 3 + 0.1 * duration * adsRate;
    }

    setPrValue(calculatedPrValue);
  };

  return (
    // <div>
    //   <h1>PR Value Calculator</h1>
    //   <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
    //     <InputLabel>Media Type</InputLabel>
    //     <Select
    //       value={mediaType}
    //       onChange={(e) => setMediaType(e.target.value)}
    //     >
    //       <MenuItem value="">Select Type</MenuItem>
    //       <MenuItem value="cetak_headline">Cetak (Headline)</MenuItem>
    //       <MenuItem value="cetak_halaman">Cetak (Halaman Dalam)</MenuItem>
    //       <MenuItem value="tv_radio">TV/Radio</MenuItem>
    //     </Select>
    //   </FormControl>
    //   {mediaType && (
    //     <div>
    //       {mediaType === 'cetak_headline' || mediaType === 'cetak_halaman' ? (
    //         <>
    //           <TextField
    //             label="Article Size (mmk)"
    //             type="number"
    //             value={articleSizeMmk}
    //             onChange={(e) => setArticleSizeMmk(parseFloat(e.target.value))}
    //           />
    //           <TextField
    //             label="Number of Columns"
    //             type="number"
    //             value={numColumns}
    //             onChange={(e) => setNumColumns(parseFloat(e.target.value))}
    //           />
    //           <RadioGroup
    //             row
    //             value={isPhoto}
    //             onChange={(e) => setIsPhoto(e.target.value)}
    //           >
    //             <FormControlLabel
    //               value="yes"
    //               control={<Radio />}
    //               label="With Photo"
    //             />
    //             <FormControlLabel
    //               value="no"
    //               control={<Radio />}
    //               label="Without Photo"
    //             />
    //           </RadioGroup>
    //         </>
    //       ) : (
    //         <TextField
    //           label="Duration (seconds)"
    //           type="number"
    //           value={duration}
    //           onChange={(e) => setDuration(parseFloat(e.target.value))}
    //         />
    //       )}
    //     </div>
    //   )}
    //   <TextField
    //     label="Ads Rate"
    //     type="number"
    //     value={adsRate}
    //     onChange={(e) => setAdsRate(parseFloat(e.target.value))}
    //     style={{ marginTop: '10px' }}
    //   />
    //   <br />
    //   <p>PR Value: Rp {prValue.toFixed(2)}</p>
    // </div>
    // <Coba />
    // <Form />
    <Formik />
    // <Register />
    
  );
}

export default App;

{/* <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={handleSubmit}>
<Form>
  <div>
    <label htmlFor="portalOfflineMediaSourceName">Portal Offline Media Name</label>
    <Field type="text" id="portalOfflineMediaSourceName" name="portalOfflineMediaSourceName" />
    <ErrorMessage name="portalOfflineMediaSourceName" component="div" />
  </div>

  <div>
    <label htmlFor="portalOfflineMediaValuationMediaType">Select Valuation Media Type</label>
    <Field as="select" id="portalOfflineMediaValuationMediaType" name="portalOfflineMediaValuationMediaType">
      <option value="">Select</option>
      <option value="type1">Type 1</option>
      <option value="type2">Type 2</option>
    </Field>
    <ErrorMessage name="portalOfflineMediaValuationMediaType" component="div" />
  </div>

  {/* Other fields... */}

//   <button type="submit">Submit</button>
// </Form>
// </Formik> */}