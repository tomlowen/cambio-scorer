<template>
<div>
  <div class="rules-section">
    <h2>Points</h2>
    <table>
      <tr>
        <td>Face cards: </td>
        <td>10</td>
      </tr>
      <tr>
        <td>Joker: </td>
        <td>0</td>
      </tr>
      <tr>
        <td>Red king: </td>
        <td>-1</td>
      </tr>
      <tr>
        <td>Black king: </td>
        <td>33</td>
      </tr>
      <tr>
        <td>All others: </td>
        <td>face value</td>
      </tr>
    </table>
  </div>
  <div class="rules-section">
    <h2>Card rules</h2>
    <table>
      <tr>
        <td>7 or 8: </td>
        <td>Look at your own card</td>
      </tr>
      <tr>
        <td>9 or 10: </td>
        <td>Look at someone else's card</td>
      </tr>
      <tr>
        <td>Jack: </td>
        <td>Blind swap two cards</td>
      </tr>
      <tr>
        <td>Queen: </td>
        <td>Look at any card, then swap any two cards</td>
      </tr>
    </table>
  </div>
  <div class="rules-section">
    <h2>Game scoring</h2>
    <p>The player with the lowest score after the set amount of rounds is the winner. If scores are tied at the end of the game the winner is determined by a sudden death game between only those players tied for top spot</p>
    <p>At the end of the game, the finishing positions are translated into points for the league</p>
    <table>
      <tr>
        <td>1st: </td>
        <td>4 points</td>
      </tr>
      <tr>
        <td>2nd: </td>
        <td>2 points</td>
      </tr>
      <tr>
        <td>3rd: </td>
        <td>1 point</td>
      </tr>
      <tr>
        <td>4th: </td>
        <td>0 points</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
}
</script>
