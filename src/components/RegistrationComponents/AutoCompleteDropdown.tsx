import React from 'react';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

const AutoCompleteDropdown = (props) => {
  const { form } = props;
  const { setFieldValue } = form;

  return (
    <>
      <ReactGoogleAutocomplete
        apiKey={'AIzaSyCU1boIZ2XFpqV6NEFSt8WcE7YRsreWngQ'}
        options={{
          types: ['(cities)'],
          fields: ['All'],
          componentRestrictions: { country: 'us' },
        }}
        defaultValue={form?.values?.city || ''}
        onChange={(e) => {
          e.preventDefault();
          setFieldValue('latitude', '');
          setFieldValue('longitude', '');
        }}
        onPlaceSelected={(place, inputRef: any) => {
          inputRef.value = place.name;
          setFieldValue('latitude', place?.geometry?.location.lat().toString());
          setFieldValue('longitude', place?.geometry?.location.lng().toString());
          place.address_components.forEach((component) => {
            const types = component.types;
            if (types.indexOf('street_number') >= 0 || types.indexOf('route') >= 0) {
            } else if (types.indexOf('locality') >= 0) {
              setFieldValue('city', component.long_name);
            } else if (types.indexOf('administrative_area_level_1') >= 0) {
              setFieldValue('state', component.long_name);
            } else if (types.indexOf('postal_code') >= 0) {
              setFieldValue('zipcode', component.long_name);
            }
          });
        }}
        className="m-auto h-[60px] w-full max-w-full rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-md focus:border-black focus:outline-none"
      />
    </>
  );
};

export default AutoCompleteDropdown;
