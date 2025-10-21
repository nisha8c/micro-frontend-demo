import React, { Suspense } from 'react';
import './App.css';

const Button = React.lazy(() => import('app1/components/Button'));

function App() {
    return (
        <div className="App">
            <h3>App2</h3>
            <Suspense fallback={<div>Loading remote Button...</div>}>
                <Button />
            </Suspense>
        </div>
    );
}

export default App;
