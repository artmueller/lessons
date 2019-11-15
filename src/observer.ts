/* listener */
/* observer - obserwuje i reaguje na zmiany subjectu wykonując jakieś funkcje
np. zmiana subjectu wywołuje run() na obseverze i leci zmiana statusu */
interface Observer {
  update(updateInfo: any): void;
}

interface Subject {
  registerObserver(o: Observer): void;
}

class TestScenario implements Subject {
  private observers: Observer[] = [];
  private state = "pending";

  registerObserver(o: Observer): void {
    this.observers.push(o);
    o.update({ state: this.state });
  }

  run() {
    setTimeout(() => {
      this.state = "running";
      this.updateObservers();
    }, 1000);

    setTimeout(() => {
      this.state = "finished";
      this.updateObservers();
    }, 2000);
  }

  private updateObservers() {
    this.observers.forEach(o => {
      o.update({ state: this.state });
    });
  }
}

class ScenarioStateLogger implements Observer {
  update(updateInfo: any): void {
    console.log(`Scenario state changed to ${updateInfo.state}`);
  }
}

const logger: Observer = new ScenarioStateLogger();
const s1 /*: Subject*/ = new TestScenario();
s1.registerObserver(logger);

s1.run();
