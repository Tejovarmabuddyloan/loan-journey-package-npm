export class UserSearch {
    constructor({ status, HTTPStatus, user }) {
      this.status = status || null;
      this.HTTPStatus = HTTPStatus || null;
      this.user = user ? user.map(u => new User(u)) : [];
    }
  
    static fromJson(json) {
      return new UserSearch({
        status: json.status,
        HTTPStatus: json.HTTPStatus,
        user: json.user ? json.user.map(User.fromJson) : [],
      });
    }
  
    toJson() {
      return {
        status: this.status,
        HTTPStatus: this.HTTPStatus,
        user: this.user ? this.user.map(u => u.toJson()) : [],
      };
    }
  }
  
  export class User {
    constructor({
      id, monthly_income, company_name, company_location, fname, lname, gender,
      gender_id, marital_status, marital_status_id, address1, address2, city,
      pincode, state, emplyoment_type, emplyoment_type_id, dob, salary_mode,
      salary_mode_id, emp_exp_month, company_type, company_type_id, created,
      mobile, pan, email, referral_code, aadhar_no, fathers_name, mothers_name,
      date_of_joining, designation, accomodation_type, accomodation_type_id,
      qualifications, office_pincode, office_address, current_addr_month,
      dateOfSalary, device_id, android_id, first_time_login, office_city,
      office_state, self_employement_type, self_employement_type_id, business_type,
      business_type_id, profession_type, profession_type_id, gross_turnover,
      gross_turnover_id, current_account_bank, saving_account_bank, industry_type,
      total_emi, credit_cards, interest_credit_cards, is_credit_consent, credit_score,
      business_nature, business_nature_id, industry_name, cptitle1, cpvalue1,
      cptitle2, cpvalue2, cptitle3, cpvalue3, cptitle4, cpvalue4, profile_image
    }) {
      this.id = id || null;
      this.monthlyIncome = monthly_income || null;
      this.companyName = company_name || null;
      this.companyLocation = company_location || null;
      this.fname = fname || null;
      this.lname = lname || null;
      this.gender = gender || null;
      this.genderId = gender_id || null;
      this.maritalStatus = marital_status || null;
      this.maritalStatusId = marital_status_id || null;
      this.address1 = address1 || null;
      this.address2 = address2 || null;
      this.city = city || null;
      this.pincode = pincode || null;
      this.state = state || null;
      this.emplyomentType = emplyoment_type || null;
      this.emplyomentTypeId = emplyoment_type_id || null;
      this.dob = dob || null;
      this.salaryMode = salary_mode || null;
      this.salaryModeId = salary_mode_id || null;
      this.empExpMonth = emp_exp_month || null;
      this.companyType = company_type || null;
      this.companyTypeId = company_type_id || null;
      this.created = created || null;
      this.mobile = mobile || null;
      this.pan = pan || null;
      this.email = email || null;
      this.referralCode = referral_code || null;
      this.aadharNo = aadhar_no || null;
      this.fathersName = fathers_name || null;
      this.mothersName = mothers_name || null;
      this.dateOfJoining = date_of_joining || null;
      this.designation = designation || null;
      this.accomodationType = accomodation_type || null;
      this.accomodationTypeId = accomodation_type_id || null;
      this.qualifications = qualifications || null;
      this.officePincode = office_pincode || null;
      this.officeAddress = office_address || null;
      this.currentAddrMonth = current_addr_month || null;
      this.dateOfSalary = dateOfSalary || null;
      this.deviceId = device_id || null;
      this.androidId = android_id || null;
      this.firstTimeLogin = first_time_login || null;
      this.officeCity = office_city || null;
      this.officeState = office_state || null;
      this.selfEmployementType = self_employement_type || null;
      this.selfEmployementTypeId = self_employement_type_id || null;
      this.businessType = business_type || null;
      this.businessTypeId = business_type_id || null;
      this.professionType = profession_type || null;
      this.professionTypeId = profession_type_id || null;
      this.grossTurnover = gross_turnover || null;
      this.grossTurnoverId = gross_turnover_id || null;
      this.currentAccountBank = current_account_bank || null;
      this.savingAccountBank = saving_account_bank || null;
      this.industryType = industry_type || null;
      this.totalEmi = total_emi || null;
      this.creditCards = credit_cards || null;
      this.interestCreditCards = interest_credit_cards || null;
      this.isCreditConsent = is_credit_consent || null;
      this.creditScore = credit_score || null;
      this.businessNature = business_nature || null;
      this.businessNatureId = business_nature_id || null;
      this.industryName = industry_name || null;
      this.cptitle1 = cptitle1 || null;
      this.cpvalue1 = cpvalue1 || null;
      this.cptitle2 = cptitle2 || null;
      this.cpvalue2 = cpvalue2 || null;
      this.cptitle3 = cptitle3 || null;
      this.cpvalue3 = cpvalue3 || null;
      this.cptitle4 = cptitle4 || null;
      this.cpvalue4 = cpvalue4 || null;
      this.profileImage = profile_image || null;
    }
  
    static fromJson(json) {
      return new User({
        id: json.id,
        monthly_income: json.monthly_income,
        company_name: json.company_name,
        company_location: json.company_location,
        fname: json.fname,
        lname: json.lname,
        gender: json.gender,
        gender_id: json.gender_id,
        marital_status: json.marital_status,
        marital_status_id: json.marital_status_id,
        address1: json.address1,
        address2: json.address2,
        city: json.city,
        pincode: json.pincode,
        state: json.state,
        emplyoment_type: json.emplyoment_type,
        emplyoment_type_id: json.emplyoment_type_id,
        dob: json.dob,
        salary_mode: json.salary_mode,
        salary_mode_id: json.salary_mode_id,
        emp_exp_month: json.emp_exp_month,
        company_type: json.company_type,
        company_type_id: json.company_type_id,
        created: json.created,
        mobile: json.mobile,
        pan: json.pan,
        email: json.email,
        referral_code: json.referral_code,
        aadhar_no: json.aadhar_no,
        fathers_name: json.fathers_name,
        mothers_name: json.mothers_name,
        date_of_joining: json.date_of_joining,
        designation: json.designation,
        accomodation_type: json.accomodation_type,
        accomodation_type_id: json.accomodation_type_id,
        qualifications: json.qualifications,
        office_pincode: json.office_pincode,
        office_address: json.office_address,
        current_addr_month: json.current_addr_month,
        dateOfSalary: json.dateOfSalary,
        device_id: json.device_id,
        android_id: json.android_id,
        first_time_login: json.first_time_login,
        office_city: json.office_city,
        office_state: json.office_state,
        self_employement_type: json.self_employement_type,
        self_employement_type_id: json.self_employement_type_id,
        business_type: json.business_type,
        business_type_id: json.business_type_id,
        profession_type: json.profession_type,
        profession_type_id: json.profession_type_id,
        gross_turnover: json.gross_turnover,
        gross_turnover_id: json.gross_turnover_id,
        current_account_bank: json.current_account_bank,
        saving_account_bank: json.saving_account_bank,
        industry_type: json.industry_type,
        total_emi: json.total_emi,
        credit_cards: json.credit_cards,
        interest_credit_cards: json.interest_credit_cards,
        is_credit_consent: json.is_credit_consent,
        credit_score: json.credit_score,
        business_nature: json.business_nature,
        business_nature_id: json.business_nature_id,
        industry_name: json.industry_name,
        cptitle1: json.cptitle1,
        cpvalue1: json.cpvalue1,
        cptitle2: json.cptitle2,
        cpvalue2: json.cpvalue2,
        cptitle3: json.cptitle3,
        cpvalue3: json.cpvalue3,
        cptitle4: json.cptitle4,
        cpvalue4: json.cpvalue4,
        profile_image: json.profile_image,
      });
    }
  
    toJson() {
      return {
        id: this.id,
        monthly_income: this.monthlyIncome,
        company_name: this.companyName,
        company_location: this.companyLocation,
        fname: this.fname,
        lname: this.lname,
        gender: this.gender,
        gender_id: this.genderId,
        marital_status: this.maritalStatus,
        marital_status_id: this.maritalStatusId,
        address1: this.address1,
        address2: this.address2,
        city: this.city,
        pincode: this.pincode,
        state: this.state,
        emplyoment_type: this.emplyomentType,
        emplyoment_type_id: this.emplyomentTypeId,
        dob: this.dob,
        salary_mode: this.salaryMode,
        salary_mode_id: this.salaryModeId,
        emp_exp_month: this.empExpMonth,
        company_type: this.companyType,
        company_type_id: this.companyTypeId,
        created: this.created,
        mobile: this.mobile,
        pan: this.pan,
        email: this.email,
        referral_code: this.referralCode,
        aadhar_no: this.aadharNo,
        fathers_name: this.fathersName,
        mothers_name: this.mothersName,
        date_of_joining: this.dateOfJoining,
        designation: this.designation,
        accomodation_type: this.accomodationType,
        accomodation_type_id: this.accomodationTypeId,
        qualifications: this.qualifications,
        office_pincode: this.officePincode,
        office_address: this.officeAddress,
        current_addr_month: this.currentAddrMonth,
        dateOfSalary: this.dateOfSalary,
        device_id: this.deviceId,
        android_id: this.androidId,
        first_time_login: this.firstTimeLogin,
        office_city: this.officeCity,
        office_state: this.officeState,
        self_employement_type: this.selfEmployementType,
        self_employement_type_id: this.selfEmployementTypeId,
        business_type: this.businessType,
        business_type_id: this.businessTypeId,
        profession_type: this.professionType,
        profession_type_id: this.professionTypeId,
        gross_turnover: this.grossTurnover,
        gross_turnover_id: this.grossTurnoverId,
        current_account_bank: this.currentAccountBank,
        saving_account_bank: this.savingAccountBank,
        industry_type: this.industryType,
        total_emi: this.totalEmi,
        credit_cards: this.creditCards,
        interest_credit_cards: this.interestCreditCards,
        is_credit_consent: this.isCreditConsent,
        credit_score: this.creditScore,
        business_nature: this.businessNature,
        business_nature_id: this.businessNatureId,
        industry_name: this.industryName,
        cptitle1: this.cptitle1,
        cpvalue1: this.cpvalue1,
        cptitle2: this.cptitle2,
        cpvalue2: this.cpvalue2,
        cptitle3: this.cptitle3,
        cpvalue3: this.cpvalue3,
        cptitle4: this.cptitle4,
        cpvalue4: this.cpvalue4,
        profile_image: this.profileImage,
      };
    }
  }
  
  // replace with actual mobile number

 