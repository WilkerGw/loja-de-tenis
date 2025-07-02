// src/lib/mockFaqs.ts
import { FaqItem } from '../types/faq';

export const faqList: FaqItem[] = [
  {
    question: 'Quais são os métodos de pagamento aceites?',
    answer: 'Aceitamos os principais cartões de crédito (Visa, MasterCard, American Express), bem como pagamentos através de PayPal e transferência bancária. A sua segurança é a nossa prioridade.',
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer: 'O prazo de entrega padrão é de 3 a 5 dias úteis para Portugal Continental. Para as ilhas e outros destinos europeus, o prazo pode variar entre 5 a 10 dias úteis. Receberá um código de rastreio assim que a sua encomenda for enviada.',
  },
  {
    question: 'Como posso devolver um produto?',
    answer: 'Tem até 30 dias após a receção da sua encomenda para solicitar uma devolução. O produto deve estar em perfeitas condições e na sua embalagem original. Por favor, aceda à sua área de cliente para iniciar o processo de devolução ou contacte o nosso suporte.',
  },
  {
    question: 'Os produtos têm garantia?',
    answer: 'Sim, todos os nossos produtos têm uma garantia de 2 anos contra defeitos de fabrico. Esta garantia não cobre danos causados por uso indevido. Se tiver algum problema, por favor guarde o seu comprovativo de compra e entre em contacto connosco.',
  },
];