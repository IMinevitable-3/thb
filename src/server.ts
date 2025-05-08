import app from './app';
import { environment } from './environment';
import { connectToDB } from './config/db';
const PORT = environment.port || 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
