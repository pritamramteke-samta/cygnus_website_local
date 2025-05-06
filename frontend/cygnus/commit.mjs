import { execSync } from 'child_process';
import process from 'process';

const args = process.argv.slice(2);

if (args.includes('--merge')) {
  console.log('Running merge commit...');
  execSync('npm run commit:merge', { stdio: 'inherit' });
} else {
  console.log('Running standard commit...');
  execSync('npm run commit:standard', { stdio: 'inherit' });
}
