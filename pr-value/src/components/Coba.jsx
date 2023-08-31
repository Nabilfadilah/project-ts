import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

function Coba() {
  const [mediaType, setMediaType] = useState('');
  const [articleSize, setArticleSize] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [adsRate, setAdsRate] = useState(0);
  const [isPhoto, setIsPhoto] = useState('Yes');
  const [prValue, setPrValue] = useState(0);

  useEffect(() => {
    calculatePrValue();
  }, [mediaType, articleSize, numColumns, adsRate, isPhoto]);

  const calculatePrValue = () => {
    let calculatedPrValue = 0;

    if (mediaType === 'cetak_headline') {
      calculatedPrValue = articleSize * numColumns * adsRate * (isPhoto === 'yes' ? 10 : 8) + 0.1 * adsRate;
    } else if (mediaType === 'cetak_halaman') {
      calculatedPrValue = articleSize * numColumns * adsRate * (isPhoto === 'yes' ? 5 : 3) + 0.1 * adsRate;
    }

    setPrValue(calculatedPrValue);
  };

  return (
    <div>
      <h1>PR Value Calculator</h1>
      <FormControl fullWidth>
        <FormLabel>Media Type</FormLabel>
        <Select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          label="Media Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="cetak_headline">Media Cetak (Headline)</MenuItem>
          <MenuItem value="cetak_halaman">Media Cetak (Halaman Dalam)</MenuItem>
        </Select>
      </FormControl>
      {mediaType && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth size="medium">
              <FormLabel>Article Size (mmk)</FormLabel>
              <OutlinedInput
                type="number"
                value={articleSize}
                onChange={(e) => setArticleSize(parseFloat(e.target.value))}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth size="medium">
              <FormLabel>Number of Columns</FormLabel>
              <OutlinedInput
                type="number"
                value={numColumns}
                onChange={(e) => setNumColumns(parseFloat(e.target.value))}
              />
            </FormControl>
          </Grid>
        </Grid>
      )}
      <FormControl fullWidth size="medium">
        <FormLabel>Ads Rate</FormLabel>
        <OutlinedInput
          type="number"
          value={adsRate}
          onChange={(e) => setAdsRate(parseFloat(e.target.value))}
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Include Photo</FormLabel>
        <RadioGroup
          row
          value={isPhoto}
          onChange={(e) => setIsPhoto(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <p>PR Value: Rp {prValue.toFixed(2)}</p>
    </div>
  );
}

export default Coba;
