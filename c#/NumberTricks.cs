using System;

namespace ConsoleApplication {
	
	public class NumberTricks {

		private void getNumber() {

			int userData = Convert.ToInt32(Console.ReadLine());
			checkNumber(userData);
		}

		private void checkNumber(int userData) {

			if (! (userData <= 9)) {

				calculateReverse(userData);
			} else {

				Console.WriteLine("You have entered one number, try again entering more than 2 digits" + userData);
			}
		}

		private void calculateReverse(int userData) {

			int dataLength = (Convert.ToString(userData)).Length;
			
			String[] reverseNumber = new String[dataLength];

			for (int i = 0; i <= dataLength; i++ ) {

				int lastDigit = userData % 10;
				reverseNumber[i] = lastDigit.ToString();
				//Console.WriteLine(i);
				userData = (userData - lastDigit) / 10;
			}

			String resultNumberString = String.Join(",", reverseNumber);
			printResult(Convert.ToInt32(resultNumberString));
		}

		private void printResult(int result) {

			Console.WriteLine(result);
		}

		public static void Main(String[] args) {

			NumberTricks number = new NumberTricks();
			number.getNumber();
		}
	}
}