
const YourComponent = () => {
  const formatToIDR = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Grid item lg={12}>
      <FormControl fullWidth size="medium">
        <FormLabel>Ads Rate</FormLabel>
        <OutlinedInput
          placeholder='Rp 0,00'
          name="portalOfflineMediaAdsRate"
          size="small"
          type="text"
          fullWidth
          error={
            Boolean(errors.portalOfflineMediaAdsRate) &&
            Boolean(touched.portalOfflineMediaAdsRate)
          }
          onChange={(e) => {
            const rawValue = e.target.value;
            const numericValue = rawValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
            const formattedValue = formatToIDR(Number(numericValue) / 100); // Convert to IDR and divide by 100
            handleChange({
              target: {
                name: e.target.name,
                value: formattedValue,
              },
            });
          }}
          disabled={loading}
          value={values.portalOfflineMediaAdsRate}
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
  );
};

export default YourComponent;
