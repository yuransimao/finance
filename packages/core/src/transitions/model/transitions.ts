export default interface Transitions{
    id: string;                   
    name:string;
    type:  'DEPOSIT' | 'EXPENSE' | 'INVESTMENT';
    amount: number;          
    category: "HOUSING"| "TRANSPORTATION" | "FOOD" | "ENTERTAINMENT" |"HEALTH" | "UTILITY"
   | "SALARY" | "EDUCATION" |" OTHER"
    paymentMethod: "CREDIT_CARD" | "DEBIT_CARD" | "BANK_TRANSFER" | "BANK_SLIP" | "CASH" | "PIX"
    | "OTHER"
    date:Date
    createdAt: Date                
    updatedAt: Date               
}