using System;
using System.Text;

namespace voiture
{
    public class @char
    {
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            int x = 100;

            for (int i = x; i > 0; i--)
            {
                Console.SetCursorPosition(0 + i, 7);
                Console.ForegroundColor = ConsoleColor.DarkRed;
                sb.AppendLine(@"      .--------.");
                Console.SetCursorPosition(0 + i, 8);
                sb.AppendLine(@" ____/_____|___ \___");
                Console.SetCursorPosition(0 + i, 9);
                sb.AppendLine(@"O    _   - |   _   ,*");
                Console.SetCursorPosition(0 + i, 10);
                sb.AppendLine(@" '--(_)-------(_)--'");
                System.Threading.Thread.Sleep(10);
                Console.ForegroundColor = ConsoleColor.DarkBlue;
                Console.SetCursorPosition(0 + i, 12);
                sb.AppendLine(@"      .--------.");
                Console.SetCursorPosition(0 + i, 13);
                sb.AppendLine(@" ____/_____|___ \___");
                Console.SetCursorPosition(0 + i, 14);
                sb.AppendLine(@"O    _   - |   _   ,*");
                Console.SetCursorPosition(0 + i, 15);
                sb.AppendLine(@" '--(_)-------(_)--'");
                System.Threading.Thread.Sleep(10);
                Console.ForegroundColor = ConsoleColor.DarkMagenta;
                Console.SetCursorPosition(1 + i, 17);
                sb.AppendLine(@"      .--------.");
                Console.SetCursorPosition(1 + i, 18);
                sb.AppendLine(@" ____/_____|___ \___");
                Console.SetCursorPosition(1 + i, 19);
                sb.AppendLine(@"O    _   - |   _   ,*");
                Console.SetCursorPosition(1 + i, 20);
                sb.AppendLine(@" '--(_)-------(_)--'");
                System.Threading.Thread.Sleep(10);
                Console.Clear();
            }
            return sb.ToString();
        }
    }
}
