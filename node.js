
const CARBON_PER_BOOK = 2.71; 

class CarbonTracker {
  static calculateSavings(sharedBooks) {
    return sharedBooks * CARBON_PER_BOOK;
  }
}