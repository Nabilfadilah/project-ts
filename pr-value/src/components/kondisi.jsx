const IFormPortalOfflineMedia = () => {
    // ...
  
    return (
      <Formik initialValues={initialValues} validationSchema={schemaValidation} onSubmit={handleSubmit}>
        <Form>
          {/* ... Other fields ... */}
  
          {/* Valuation Media Type */}
          <Grid item lg={12}>
            <FormControl fullWidth size="medium">
              <FormLabel>Select Valuation Media Type</FormLabel>
              <Select
                fullWidth
                size="small"
                name="portalOfflineMediaValuationMediaType"
                inputProps={{ 'data-testid': 'portalOfflineMediaValuationMediaType' }}
                value={values.portalOfflineMediaValuationMediaType}
                onChange={(e) => {
                  handleChange(e);
  
                  // Here, you can check the selected value and conditionally show/hide fields
                  if (e.target.value === 'Print Media (Headline)' || e.target.value === 'Print Media (Page)') {
                    setFieldValue('portalOfflineMediaDuration', ''); // Clear the duration field
                    setShowMmColumnFields(true); // Show mm and column fields
                  } else if (e.target.value === 'TV/Radio') {
                    setFieldValue('portalOfflineMediaMm', ''); // Clear the mm field
                    setFieldValue('portalOfflineMediaColumn', ''); // Clear the column field
                    setShowMmColumnFields(false); // Hide mm and column fields
                  }
                }}
                error={
                  errors.portalOfflineMediaValuationMediaType &&
                  touched.portalOfflineMediaValuationMediaType
                }
              >
                {options.map((option) => (
                  <MenuItem value={option.value} key={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText
                error
                variant="outlined"
                margin="dense"
                sx={{ ml: 0 }}
              >
                {errors.portalOfflineMediaValuationMediaType &&
                  touched.portalOfflineMediaValuationMediaType &&
                  errors.portalOfflineMediaValuationMediaType}
              </FormHelperText>
            </FormControl>
          </Grid>
  
          {/* Conditionally show mm and column fields based on selected option */}
          {showMmColumnFields && (
            <>
              <Grid item lg={6}>
                {/* ... mm field ... */}
              </Grid>
              <Grid item lg={6}>
                {/* ... column field ... */}
              </Grid>
            </>
          )}
  
          {/* Conditionally show duration field based on selected option */}
          {!showMmColumnFields && (
            <Grid item lg={12}>
              {/* ... duration field ... */}
            </Grid>
          )}
  
          {/* ... Submit button ... */}
        </Form>
      </Formik>
    );
  };
  
  export default IFormPortalOfflineMedia;
  