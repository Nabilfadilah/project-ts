// ...
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
    handleChange({
      target: { name: e.target.name, value: formattedValue },
    });
    // Check if the formatted value is empty
    if (formattedValue === '') {
      // If it's empty, set the value to undefined
      handleChange({
        target: { name: e.target.name, value: undefined },
      });
    }
  }}
  inputProps={{
    'data-testid': 'portalOfflineMediaAdsRate'
  }}
  disabled={loading}
  value={
    values.portalOfflineMediaAdsRate
      ? `Rp ${new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(Number(values.portalOfflineMediaAdsRate))}`
      : ''
  }
/>
// ...
