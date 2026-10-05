import React, { Suspense } from 'react';
import ResetPasswoordForm from './Reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback='Loading'>
                <ResetPasswoordForm></ResetPasswoordForm>

            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;