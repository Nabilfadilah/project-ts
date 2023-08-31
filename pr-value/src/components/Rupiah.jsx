import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format'; // Import the NumberFormat component

// ... Schema validation and other components ...

const IFormPortalOfflineMedia = () => {
  // ...

  return (
    <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={handleSubmit}>
      <Form>
        {/* ... Other fields ... */}

        {/* Ads Rate */}
        <Grid item lg={12}>
          <FormControl fullWidth size="medium">
            <FormLabel>Ads Rate</FormLabel>
            <NumberFormat
              customInput={OutlinedInput} // Use the OutlinedInput component from Material-UI
              placeholder='Rp 0,00'
              name="portalOfflineMediaAdsRate"
              fullWidth
              error={
                Boolean(errors.portalOfflineMediaAdsRate) &&
                Boolean(touched.portalOfflineMediaAdsRate)
              }
              onValueChange={(values) => {
                // Extract the formatted value without non-digit characters
                const { floatValue } = values;
                // Update the field value
                setFieldValue('portalOfflineMediaAdsRate', floatValue);
              }}
              disabled={loading}
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp "
              allowNegative={false}
              value={values.portalOfflineMediaAdsRate}
              inputProps={{
                min: 1,
                'data-testid': 'portalOfflineMediaAdsRate',
              }}
            />
            <FormHelperText
              error
              variant="outlined"
              margin="dense"
              sx={{ ml: 1 }}
            >
              {errors.portalOfflineMediaAdsRate &&
                touched.portalOfflineMediaAdsRate &&
                errors.portalOfflineMediaAdsRate}
            </FormHelperText>
          </FormControl>
        </Grid>

        {/* ... Submit button ... */}
      </Form>
    </Formik>
  );
};

export default IFormPortalOfflineMedia;
