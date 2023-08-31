// ...
return (
    <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={handleSubmit}>
      <Form>
        {/* ... Other fields ... */}
  
        {/* Ads Rate */}
        <Grid item lg={12}>
          <FormControl fullWidth size="medium">
            <FormLabel>Ads Rate</FormLabel>
            <OutlinedInput
              placeholder='Rp 0,00'
              name="portalOfflineMediaAdsRate"
              size="small"
              fullWidth
              error={
                Boolean(errors.portalOfflineMediaAdsRate) &&
                Boolean(touched.portalOfflineMediaAdsRate)
              }
              onChange={(e) => {
                const formattedValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                handleChange(e); // Call the existing handleChange
                setFieldValue('portalOfflineMediaAdsRate', formattedValue);
              }}
              inputProps={{
                'data-testid': 'portalOfflineMediaAdsRate'
              }}
              disabled={loading}
              value={
                `Rp ${new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(Number(values.portalOfflineMediaAdsRate))}`
              }
            />
            <FormHelperText
              error
              variant="outlined"
              margin="dense"
              sx={{ ml: 0 }}
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
  // ...
  