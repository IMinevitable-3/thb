import app from './app';
import { environment } from './environment';
const PORT = environment.port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
