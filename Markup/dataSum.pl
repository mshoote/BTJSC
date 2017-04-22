#This file will need to be stored with the paging time text file to work properly.
#The Perl script will output a sum of all the times and the total number of text file in the chosen folder.

use List::MoreUtils 'pairwise';
#You must change the location of pageTiming files, for each testing result: example:
#	- C:/Users/Jim_pc/Desktop/Angular/Angular_10k_Chrome
#	- C:/Users/Jim_pc/Desktop/Angular/Angular_1k_FireFox
my $dir = "C:/Users/USER_NAME/Desktop/FOLDER_NAME/FRAMEWORK_JSONSIZE_BROWSER";

my @temp = ();
my @tmp =();
my @sum = ();
my $num = 0;

#Loop for accessing each Text file.
foreach my $fp (glob("$dir/*.txt")) {
  open my $fh, "<", $fp or die "can't read open '$fp'";
  my $count = 0;
  
#Gathers the times for each file.
while (my $line = <$fh>){
	chomp $line;
	my @strings1 = $line =~ /([0-9]+)(?:\,|\s\])/g;
	if (@strings1){
		if($count <= 15){
		push @temp, @strings1;
		}
	}
	$count++;
}

#Begins to sum the paging times.
if(tmp){
  @sum = pairwise { $a + $b } @temp, @tmp;
  @tmp = @sum;
  @temp = ();
}else{
  @tmp = @temp;
  @temp = ();
}
$num++;
}
print $num . "\n";

#Stores the final times of the testing results into "total.txt".
foreach my $s (@sum){
  print "$s, ";
  }
  open my $tot, ">", 'total.txt' or die "Failed to open $!\n"; 
	foreach my $s (@sum){
	  print $tot $s/$num . ", ";
	}
	close $tot;
