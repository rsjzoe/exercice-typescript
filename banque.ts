interface Account {
  accountId: number;
  balance: number;
  holderName: string;
}

let cpt = 0;
class Bank {
  private comptes: Account[] = [];

  public createAccount(holderName: string) {
    this.comptes.push({ balance: 0, accountId: cpt, holderName: holderName });
    cpt++;
  }

  public deposit(accountId: number, amount: number) {
    for (let compte of this.comptes) {
      if (compte.accountId == accountId) {
        compte.balance += amount;
      }
    }
  }

  public withdraw(accountId: number, amount: number) {
    for (let compte of this.comptes) {
      if (compte.accountId == accountId) {
        if (compte.balance >= amount) {
          compte.balance -= amount;
        } else {
          throw new Error("balance insuffisant");
        }
      }
    }
  }

  public transfer(fromAccountId: number, toAccountId: number, amount: number) {
    for (let fromAccount of this.comptes) {
      for (let toAccount of this.comptes) {
        if (
          fromAccount.accountId == fromAccountId &&
          toAccount.accountId == toAccountId
        ) {
          if (fromAccount.balance >= amount) {
            fromAccount.balance -= amount;
            toAccount.balance += amount;
            return;
          } else {
            throw new Error("balance insuffisant");
          }
        }
      }
    }
  }
}
