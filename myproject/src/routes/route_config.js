
import Login from '../pages/login/login';
import SignUp from '../pages/login/sign-up';
import Home from '../pages/home/home';
//patient
import AddPatient from '../pages/patient/add-patient/add-patient';
import SearchPatient from '../pages/patient/search-patient/search-patient';
import PatientDetail from '../pages/patient/patient-detail/patient-detail';
import UpdatePatient from '../pages/patient/update-patient/update-patient';
//doctor
import AddDoctor from '../pages/doctor/add-doctor/add-doctor';
import SearchDoctor from '../pages/doctor/search-doctor/search-doctor';
import DoctorDetail from '../pages/doctor/doctor-detail/doctor-detail';
import UpdateDoctor from '../pages/doctor/update-doctor/update-doctor';

//visit
import AddVisit from '../pages/visit/add-visit/add-visit';
import SearchVisit from '../pages/visit/search-visit/search-visit';
import VisitDetail from '../pages/visit/visit-detail/visit-detail';
import UpdateVisit from '../pages/visit/update-visit/update-visit';

//ward
import AddWard from '../pages/ward/add-ward/add-ward';
import SearchWard from '../pages/ward/search-ward/search-ward';
import UpdateWard from '../pages/ward/update-ward/update-ward';

//pay
import AddPay from '../pages/pay/add-pay/add-pay';
import AllPay from '../pages/pay/all-pay/all-pay';
import Invoice from '../pages/pay/invoice/invoice';

//所有的路由地址及对应组件
const routes = [
    {
        path: '/',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: Login,
    },

    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '/home',
        component: Home
    },
    //patient
    {
        path: '/add-patient',
        component: AddPatient
    }
    ,
    {
        path: '/search-patient',
        component: SearchPatient
    }
    ,
    {
        path: '/patient-detail',
        component: PatientDetail
    }
    ,
    {
        path: '/update-patient',
        component: UpdatePatient
    },
    //doctor
    {
        path: '/add-doctor',
        component: AddDoctor
    }
    ,
    {
        path: '/search-doctor',
        component: SearchDoctor
    }
    ,
    {
        path: '/doctor-detail',
        component: DoctorDetail
    }
    ,
    {
        path: '/update-doctor',
        component: UpdateDoctor
    },
    //visit
    {
        path: '/add-visit',
        component: AddVisit
    }
    ,
    {
        path: '/search-visit',
        component: SearchVisit
    }
    ,
    {
        path: '/visit-detail',
        component: VisitDetail
    }
    ,
    {
        path: '/update-visit',
        component: UpdateVisit
    },
    //ward
    {
        path: '/add-ward',
        component: AddWard
    }
    ,
    {
        path: '/search-ward',
        component: SearchWard
    }
    ,
    {
        path: '/update-ward',
        component: UpdateWard
    },
    //pay
    {
        path: '/add-pay',
        component: AddPay
    }
    ,
    {
        path: '/all-pay',
        component: AllPay
    }
    ,
    {
        path: '/invoice',
        component: Invoice
    }
]

export default routes;