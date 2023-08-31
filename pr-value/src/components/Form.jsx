import React from 'react';
import {
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  Select,
} from '@mui/material';

function Form({
  valuationType,
  setValuationType,
  articleSizeMmk,
  setArticleSizeMmk,
  numColumns,
  setNumColumns,
  adsRate,
  setAdsRate,
  duration,
  setDuration,
  isPhoto,
  setIsPhoto,
}) {
  return (
    <div>
      <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
        <InputLabel>Valuation Type</InputLabel>
        <Select
          value={valuationType}
          onChange={(e) => setValuationType(e.target.value)}
        >
          <MenuItem value="">Select Type</MenuItem>
          <MenuItem value="cetak_headline">Cetak (Headline)</MenuItem>
          <MenuItem value="cetak_halaman">Cetak (Halaman Dalam)</MenuItem>
          <MenuItem value="tv_radio">TV/Radio</MenuItem>
        </Select>
      </FormControl>
      {valuationType === 'cetak_headline' || valuationType === 'cetak_halaman' ? (
        <>
          <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
            <OutlinedInput
              label="Article Size (mmk)"
              type="number"
              value={articleSizeMmk}
              onChange={(e) => setArticleSizeMmk(e.target.value)}
              startAdornment={<InputAdornment position="start">mmk</InputAdornment>}
            />
          </FormControl>
          <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
            <OutlinedInput
              label="Number of Columns"
              type="number"
              value={numColumns}
              onChange={(e) => setNumColumns(e.target.value)}
            />
          </FormControl>
        </>
      ) : (
        <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
          <OutlinedInput
            label="Duration (seconds)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            endAdornment={<InputAdornment position="end">seconds</InputAdornment>}
          />
        </FormControl>
      )}
      {(valuationType === 'cetak_headline' || valuationType === 'cetak_halaman') && (
        <FormControl component="fieldset">
          <RadioGroup value={isPhoto} onChange={(e) => setIsPhoto(e.target.value)}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      )}
      <FormControl variant="outlined" style={{ marginBottom: '10px' }}>
        <OutlinedInput
          label="Ads Rate"
          type="number"
          value={adsRate}
          onChange={(e) => setAdsRate(e.target.value)}
          startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}

export default Form;
