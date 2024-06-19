import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Computer } from '../../../data/hod';
import { computerDepartmentData } from '../../../data/department'

const CompEngg = () => {
  return (
    <DepartmentTemplate 
      cardsData={Computer}
      title={computerDepartmentData.title} 
      description={computerDepartmentData.description}
      teachers={computerDepartmentData.teachers}
      events={computerDepartmentData.events}
      galleryImages={computerDepartmentData.galleryImages}
      
      />
  );
};

export default CompEngg;
