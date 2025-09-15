import './app.css';
import { Provider } from './providers/provider.tsx';

export function App() {
  return (
    <Provider>
      <div>App page</div>
    </Provider>
  );
}
