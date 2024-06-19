import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { It } from '../../../data/hod';
import { itDepartmentData } from '../../../data/department'

const IT = () => {
  return (
    <DepartmentTemplate 
      cardsData={It}
      title={itDepartmentData.title} 
      description={itDepartmentData.description}
      teachers={itDepartmentData.teachers}
      events={itDepartmentData.events}
      galleryImages={itDepartmentData.galleryImages}
      
      />
  );
};

export default IT;
