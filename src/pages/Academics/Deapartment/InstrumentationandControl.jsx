import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { Instrumentation } from '../../../data/hod';
import { icDepartmentData } from '../../../data/department'

const InstruControl = () => {
  return (
    <DepartmentTemplate 
      cardsData={Instrumentation}
      title={icDepartmentData.title} 
      description={icDepartmentData.description}
      teachers={icDepartmentData.teachers}
      events={icDepartmentData.events}
      galleryImages={icDepartmentData.galleryImages}
      
      />
  );
};

export default InstruControl;
