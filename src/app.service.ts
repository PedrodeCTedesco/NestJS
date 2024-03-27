import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService 
{
  getGreetings(): string 
  {
    return "Bem-vindo ao serviço de adoção de gatinhos!";
  }//fim do método getHello()
}//fim da classe AppSerive
